import React from 'react';
import './index.scss';
import ComponentsPanel from '../components-panel/index';
import LayerPanel from '../layer-panel/index';

function EditorMain() {
  return (
    <div className='visual-editor-main-layout'>
      <LayerPanel />
      <ComponentsPanel />
      <div className='editor-panel-layout'></div>
      <div className='config-panel-layout'></div>
    </div>
  );
}

export default EditorMain;
