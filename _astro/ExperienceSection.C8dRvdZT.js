import{j as e,m as t,w as s}from"./proxy.D-4ZvelT.js";import{T as o}from"./TimelineItem.WQvHl3F2.js";import{M as c}from"./MotionWrapper.uS9ztqNw.js";import{c as l}from"./createLucideIcon.BaZjYi2n.js";import"./index.BVOCwoKb.js";import"./utils.hW16Mj6N.js";/**
 * @license lucide-react v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],d=l("Briefcase",m);function w(){return e.jsx("section",{id:"Experience",className:"py-12 bg-gradient-to-b from-muted/20 to-background",children:e.jsxs("div",{className:"container max-w-4xl mx-auto px-6 md:px-4",children:[e.jsx(c,{children:e.jsxs("h2",{className:"text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block",children:[e.jsx(t.span,{className:"inline-block mr-2",initial:{rotate:0},whileInView:{rotate:[0,-10,10,-5,5,0]},transition:{duration:.5,delay:.2},viewport:{once:!0},children:"💼"})," ","Expérience professionnelle          "]})}),e.jsx("div",{className:"mb-8",children:s.map((i,r)=>e.jsx(o,{title:`👨‍💻 ${i.position} | ${i.company}`,subtitle:`🌍 ${i.location}`,date:`📅 ${i.period}`,isLast:r===s.length-1,index:r,children:e.jsxs(t.div,{className:"mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2",children:e.jsx(d,{className:"h-4 w-4 text-purple-500"})}),e.jsx("h4",{className:"text-sm font-medium",children:"Key Achievements"})]}),e.jsx("ul",{className:"list-none ml-4 space-y-2 text-sm",children:i.achievements.map((n,a)=>e.jsx(t.li,{className:"text-muted-foreground relative pl-6",initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},transition:{duration:.3,delay:.1*a},viewport:{once:!0},children:n},a))})]})},i.company+i.period))})]})})}export{w as default};
