import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CellList from './components/cell-list';
import { useTypedSelector } from './hooks/use-typed-selector';
import { useEffect } from 'react';
import { initialCode, initialCode2, initialCode2Pt, initialCodePt, initialText, initialTextPt } from './conts';
import Header from './components/header';

import { useAction } from "./hooks/use-actions";

const App = () => {
  const { changeLanguageToEn, changeLanguageToPt, insertCellAfter, deleteAllCell } = useAction();
  const language = useTypedSelector((state) => state.cells.language);
  useEffect(() => {
    if(language === 1) {
      deleteAllCell();
      insertCellAfter(null, 'code', initialCode2Pt);
      insertCellAfter(null, 'code', initialCodePt);
      insertCellAfter(null, 'text', initialTextPt);
    } else if (language === 2) {
      deleteAllCell();
      insertCellAfter(null, 'code', initialCode2);
      insertCellAfter(null, 'code', initialCode);
      insertCellAfter(null, 'text', initialText);
    }
    
  }, [language]);
  return (
    <div>
      <Header changeToPt={changeLanguageToPt} changeToEn={changeLanguageToEn} />
      <CellList />
    </div>
  );
};

export default App;
