import Automaton from "./class/Automaton.js";
import AutomatonRenderer2D from "./class/AutomatonRenderer2D.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;

const automaton = new Automaton({rows: 3, cols : 4, aliveProb: 0.5});
automaton.randomize();
console.log(automaton);

const m1Renderer = new AutomatonRenderer2D({ctx, automaton})

m1Renderer.draw();

// const neighbors = m1.getNeighborhoodIndexes(2, 3);
// m1.set(1, 3, 1);
// console.log(neighbors);
// console.log(m1.count(neighbors, 1));