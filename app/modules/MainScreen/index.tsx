import React, { useState } from 'react';
import { ContentContainerStyled, ParagraphStyles, SwitchContainerStyled } from "./styles";
import { MaterialTable } from "../MaterialTable";
import { AntTable } from "../AntTable";
import { Switch } from "antd";

/**
 * Основная страница
 */
export const MainScreen: React.FC = () => {
  const [showAnt, setShowAnt] = useState<boolean>(false);

  return (
    <ContentContainerStyled>
      <h2>Test task: Tree table - Ecaterina Baba</h2>
      <ParagraphStyles>
        Таблица Material UI: был вручную реализован механизм "сворачивания" таблицы с использованием
        Material UI Table. Кнопка "+" отображается всегда (не меняется на "-" или аналог) в соответствии
        с требованиями к задаче. Загрузка данных замокана при помощи Promise и setTimeout(). Код задокументирован.
        Таблица может "скакать", это из-за того, что появляется скроллбар справа. Можно скрыть таблицу Ant для демонстрации.
      </ParagraphStyles>
      <MaterialTable/>
      <SwitchContainerStyled>
        <span>Показать реализацию Ant</span>
        <Switch checked={showAnt} onChange={checked => {
          setShowAnt(checked)
        }}/>
        {showAnt &&
        (<>
          <ParagraphStyles>
            Таблица Ant Design: более простой пример реализации, на основе личного опыта использования этой
            библиотеки. Кастомизации не были проведены, так как функциональность таблицы сохранилась.
          </ParagraphStyles>
          <AntTable/>
        </>)}
      </SwitchContainerStyled>
    </ContentContainerStyled>
  )
};