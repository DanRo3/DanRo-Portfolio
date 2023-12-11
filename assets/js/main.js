import { skills } from "../data/datos.js";

const contBarrasSkill = document.getElementById('container-skill-bar');
const targetSkill = document.getElementById('izquierda-skill');


skills.forEach((skill)=>{
    contBarrasSkill.innerHTML+=
    `
    <div class="skill-box">
        <span class="title">${skill.titulo}</span>

        <div class="skill-bar">
           <span class="${skill.nombre}">
               <span class="tooltip">${skill.porcent}</span>
           </span>
        </div>
    </div>
    `
    targetSkill.innerHTML +=
    `
    <div class="contenedor-icon-skill">
        <div class="target-skill-image">
            <img src=${skill.direcccion}>
        </div>
    </div>
    `
})



