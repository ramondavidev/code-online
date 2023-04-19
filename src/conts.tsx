export const initialCode = 
`import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h3>Count: {count}</h3>
    </div>
  );
};

show(<Counter />);
`;

export const initialCode2 = 
`const App = () => {
    return (
      <div>
        <h3>Component Rendered!</h3>
        <i>Counter component will be rendered below...</i>
        <hr />
        {/*
              Counter was declared in an earlier cell -
              we can reference it here!
          */}
        <Counter />
      </div>
    );
  };
  
  show(<App />);
`;

export const initialCodePt = 
`import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clique</button>
      <h3>Contador: {count}</h3>
    </div>
  );
};

show(<Counter />);
`;

export const initialCode2Pt = 
`const App = () => {
    return (
      <div>
        <h3>Componente Renderizado!</h3>
        <i>O componente Counter será renderizado abaixo...</i>
        <hr />
        {/*
              Counter foi declarada na celula anterior -
              podemos referencia-la aqui
          */}
        <Counter />
      </div>
    );
  };
  
  show(<App />);
`;

export const initialText = `
# Code Online - By Ramon
- This is an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown.
- Click any text cell (including this one) to edit it.
- The code in each code editor is all joined together into one file. If you define a variable in cell #1, you can refer to it in any following cell!
- You can show any React component, string, number, or anything else by calling the show function. This is a function built into this environment. Call show multiple times to show multiple values.
- Re-order or delete cells using the buttons on the top right.
- Add new cells by hovering on the divider between each cell.
`;

export const initialTextPt = `
# Code Online - Por Ramon
- Este é um ambiente de codificação interativo. Você pode escrever Javascript, vê-lo executado e escrever uma documentação abrangente usando markdown.
- Clique em qualquer célula de texto (incluindo esta) para editá-la.
- O código em cada editor de código é todo reunido em um arquivo. Se você definir uma variável na célula nº 1, poderá fazer referência a ela em qualquer célula seguinte!
- Você pode mostrar qualquer componente React, string, número ou qualquer outra coisa chamando a função show. Esta é uma função construída neste ambiente. Chame show várias vezes para mostrar vários valores.
- Reordene ou exclua células usando os botões no canto superior direito.
- Adicione novas células passando o mouse sobre o divisor entre cada célula.
`;