import { useEffect, useRef } from 'react';
import './HeroBg.css';

export default function HeroBg() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Colors ──────────────────────────────────────────────
    const CYAN   = '99,102,241';
    const BLUE   = '167,139,250';
    const PURPLE = '167,139,250';

    // ── Nodes ───────────────────────────────────────────────
    const NODE_COUNT = 28;
    const nodes = [];

    const nodeTypes = ['db', 'process', 'ai', 'cloud', 'etl', 'model'];

    for (let i = 0; i < NODE_COUNT; i++) {
      const type = nodeTypes[Math.floor(Math.random() * nodeTypes.length)];
      const color = type === 'ai' || type === 'model' ? PURPLE
                  : type === 'cloud'                  ? BLUE
                  :                                     CYAN;
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 3 + Math.random() * 4,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        color,
        type,
        connections: [],
      });
    }

    // Build connections (each node connects to nearest 2-4)
    nodes.forEach((node, i) => {
      const dists = nodes
        .map((n, j) => ({ j, d: Math.hypot(n.x - node.x, n.y - node.y) }))
        .filter(({ j }) => j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2 + Math.floor(Math.random() * 3));
      node.connections = dists.map(d => d.j);
    });

    // ── Data Packets ─────────────────────────────────────────
    const PACKET_COUNT = 40;
    const packets = [];

    const spawnPacket = () => {
      const fromIdx = Math.floor(Math.random() * nodes.length);
      const from = nodes[fromIdx];
      if (!from.connections.length) return;
      const toIdx = from.connections[Math.floor(Math.random() * from.connections.length)];
      const color = [CYAN, BLUE, PURPLE][Math.floor(Math.random() * 3)];
      packets.push({
        from: fromIdx,
        to: toIdx,
        t: 0,
        speed: 0.003 + Math.random() * 0.004,
        color,
        size: 2 + Math.random() * 2,
      });
    };

    for (let i = 0; i < PACKET_COUNT; i++) spawnPacket();

    // ── Grid dots ─────────────────────────────────────────────
    const GRID_SPACING = 60;

    const drawGrid = () => {
      const cols = Math.ceil(canvas.width / GRID_SPACING) + 1;
      const rows = Math.ceil(canvas.height / GRID_SPACING) + 1;
      ctx.fillStyle = `rgba(${CYAN},0.06)`;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          ctx.beginPath();
          ctx.arc(c * GRID_SPACING, r * GRID_SPACING, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    // ── Icon drawings ─────────────────────────────────────────
    const drawDB = (x, y, r, alpha, color) => {
      ctx.strokeStyle = `rgba(${color},${alpha})`;
      ctx.lineWidth = 1;
      const rx = r * 1.4, ry = r * 0.45, h = r * 1.8;
      ctx.beginPath();
      ctx.ellipse(x, y - h / 2, rx, ry, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x - rx, y - h / 2);
      ctx.lineTo(x - rx, y + h / 2);
      ctx.moveTo(x + rx, y - h / 2);
      ctx.lineTo(x + rx, y + h / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(x, y + h / 2, rx, ry, 0, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawAI = (x, y, r, alpha, color) => {
      ctx.strokeStyle = `rgba(${color},${alpha})`;
      ctx.lineWidth = 1;
      const layers = [[-r * 1.2, 0], [0, -r * 0.8], [0, r * 0.8], [r * 1.2, 0]];
      layers.forEach(([lx, ly]) => {
        ctx.beginPath();
        ctx.arc(x + lx, y + ly, r * 0.3, 0, Math.PI * 2);
        ctx.stroke();
      });
      for (let a = 0; a < 3; a++) {
        for (let b = 1; b < 4; b++) {
          if (a !== b) {
            ctx.beginPath();
            ctx.moveTo(x + layers[a][0], y + layers[a][1]);
            ctx.lineTo(x + layers[b][0], y + layers[b][1]);
            ctx.stroke();
          }
        }
      }
    };

    const drawCloud = (x, y, r, alpha, color) => {
      ctx.strokeStyle = `rgba(${color},${alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x - r * 0.5, y, r * 0.5, Math.PI, 0);
      ctx.arc(x + r * 0.5, y, r * 0.5, Math.PI, 0);
      ctx.arc(x, y - r * 0.3, r * 0.6, Math.PI, 0);
      ctx.arc(x - r, y + r * 0.2, r * 0.4, Math.PI * 0.5, Math.PI * 1.5, true);
      ctx.arc(x + r, y + r * 0.2, r * 0.4, Math.PI * 1.5, Math.PI * 0.5);
      ctx.lineTo(x - r, y + r * 0.6);
      ctx.stroke();
    };

    const drawETL = (x, y, r, alpha, color) => {
      ctx.strokeStyle = `rgba(${color},${alpha})`;
      ctx.lineWidth = 1;
      const w = r * 1.6, h = r * 0.9;
      ctx.strokeRect(x - w, y - h / 2, w * 0.8, h);
      ctx.strokeRect(x - w * 0.1, y - h / 2, w * 0.8, h);
      ctx.strokeRect(x + w * 0.2, y - h / 2, w * 0.8, h);
      ctx.beginPath();
      ctx.moveTo(x - w * 0.2, y); ctx.lineTo(x - w * 0.1, y);
      ctx.moveTo(x + w * 0.1,  y); ctx.lineTo(x + w * 0.2,  y);
      ctx.stroke();
    };

    const drawModel = (x, y, r, alpha, color) => {
      ctx.strokeStyle = `rgba(${color},${alpha})`;
      ctx.fillStyle   = `rgba(${color},${alpha * 0.15})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y - r * 1.2);
      ctx.lineTo(x + r * 1.2, y);
      ctx.lineTo(x, y + r * 1.2);
      ctx.lineTo(x - r * 1.2, y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    };

    const drawProcess = (x, y, r, alpha, color) => {
      ctx.strokeStyle = `rgba(${color},${alpha})`;
      ctx.lineWidth = 1;
      const gears = 6, ir = r * 0.55;
      for (let g = 0; g < gears; g++) {
        const angle = (g / gears) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(x + Math.cos(angle) * ir, y + Math.sin(angle) * ir, r * 0.35, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(x, y, r * 0.4, 0, Math.PI * 2);
      ctx.stroke();
    };

    // ── Draw node by type ─────────────────────────────────────
    const drawNodeIcon = (node, alpha) => {
      const { x, y, r, color, type } = node;
      switch (type) {
        case 'db':      drawDB(x, y, r, alpha, color); break;
        case 'ai':      drawAI(x, y, r, alpha, color); break;
        case 'cloud':   drawCloud(x, y, r, alpha, color); break;
        case 'etl':     drawETL(x, y, r, alpha, color); break;
        case 'model':   drawModel(x, y, r, alpha, color); break;
        case 'process': drawProcess(x, y, r, alpha, color); break;
        default: break;
      }
    };

    // ── Main loop ─────────────────────────────────────────────
    let frame = 0;
    const MAX_DIST = 220;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid
      drawGrid();

      // Update + draw connections
      nodes.forEach((node) => {
        node.pulsePhase += node.pulseSpeed;
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -50) node.x = canvas.width + 50;
        if (node.x > canvas.width + 50) node.x = -50;
        if (node.y < -50) node.y = canvas.height + 50;
        if (node.y > canvas.height + 50) node.y = -50;
      });

      // Draw edges
      const drawn = new Set();
      nodes.forEach((node, i) => {
        node.connections.forEach((j) => {
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (drawn.has(key)) return;
          drawn.add(key);
          const to = nodes[j];
          const dist = Math.hypot(to.x - node.x, to.y - node.y);
          if (dist > MAX_DIST) return;
          const alpha = (1 - dist / MAX_DIST) * 0.18;
          const grad = ctx.createLinearGradient(node.x, node.y, to.x, to.y);
          grad.addColorStop(0, `rgba(${node.color},${alpha})`);
          grad.addColorStop(1, `rgba(${to.color},${alpha})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(to.x, to.y);
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(node.pulsePhase);
        const baseAlpha = 0.5 + pulse * 0.25;

        // Glow
        const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 5);
        grd.addColorStop(0, `rgba(${node.color},${0.12 + pulse * 0.06})`);
        grd.addColorStop(1, `rgba(${node.color},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 5, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `rgba(${node.color},${baseAlpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();

        // Icon
        drawNodeIcon(node, baseAlpha * 0.7);
      });

      // Draw + update packets
      packets.forEach((pkt, idx) => {
        pkt.t += pkt.speed;
        if (pkt.t >= 1) {
          // re-route
          const from = pkt.to;
          const node = nodes[from];
          const toIdx = node.connections[Math.floor(Math.random() * node.connections.length)] ?? from;
          pkt.from = from;
          pkt.to = toIdx;
          pkt.t = 0;
          pkt.color = [CYAN, BLUE, PURPLE][Math.floor(Math.random() * 3)];
          return;
        }
        const f = nodes[pkt.from];
        const t = nodes[pkt.to];
        const px = f.x + (t.x - f.x) * pkt.t;
        const py = f.y + (t.y - f.y) * pkt.t;

        // Trail
        ctx.strokeStyle = `rgba(${pkt.color},0.5)`;
        ctx.lineWidth = pkt.size * 0.6;
        ctx.lineCap = 'round';
        const trailLen = 0.08;
        const t0 = Math.max(0, pkt.t - trailLen);
        const tx0 = f.x + (t.x - f.x) * t0;
        const ty0 = f.y + (t.y - f.y) * t0;
        ctx.beginPath();
        ctx.moveTo(tx0, ty0);
        ctx.lineTo(px, py);
        ctx.stroke();

        // Dot
        ctx.fillStyle = `rgba(${pkt.color},0.95)`;
        ctx.beginPath();
        ctx.arc(px, py, pkt.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow
        const grd = ctx.createRadialGradient(px, py, 0, px, py, pkt.size * 4);
        grd.addColorStop(0, `rgba(${pkt.color},0.3)`);
        grd.addColorStop(1, `rgba(${pkt.color},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(px, py, pkt.size * 4, 0, Math.PI * 2);
        ctx.fill();
      });

      frame++;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="hero-bg-canvas-wrapper">
      <canvas ref={canvasRef} className="hero-bg-canvas" />
      <div className="hero-bg-overlay" />
    </div>
  );
}
