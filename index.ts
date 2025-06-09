import './styles.css.ts';

// Creamos el HTML de la escena
const containerCube = document.createElement('div');
containerCube.className = 'container-cube';

const container = document.createElement('div');
container.className = 'container';

// Función que genera una base con 5 lados
const createBase = (className: string): HTMLDivElement => {
  const base = document.createElement('div');
  base.className = `base ${className}`;
  for (let i = 1; i <= 5; i++) {
    const side = document.createElement('div');
    side.className = `side side-${i}`;
    base.appendChild(side);
  }
  return base;
};

// Agregamos las cuatro bases
container.appendChild(createBase('base-bottom'));
container.appendChild(createBase('center'));
container.appendChild(createBase('center-top'));
container.appendChild(createBase('base-top'));

containerCube.appendChild(container);

// Caras externas del cubo
['front', 'behind', 'right', 'left', 'top', 'bottom'].forEach(position => {
  const side = document.createElement('div');
  side.className = `side ${position}`;
  containerCube.appendChild(side);
});

document.body.appendChild(containerCube);

// Control de pausa al hacer click
document.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).matches('*')) {
    document.querySelectorAll('.container').forEach((el) =>
      el.classList.toggle('pause')
    );
  }
});
