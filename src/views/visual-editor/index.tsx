import React from 'react';
import './index.scss';
import EditorHeader from './components/editor-header/index';
import EditorMain from './components/editor-main/index';
function VisualEditor(): JSX.Element {
  return (
    <div className='visual-editor-container-layout'>
      <EditorHeader />
      <EditorMain />
    </div>
  );
}

export default VisualEditor;
