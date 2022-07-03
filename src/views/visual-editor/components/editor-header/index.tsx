import React from 'react';
import './index.scss';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleLayerPanelExpend } from '@store/layout';

function EditorHeader(): JSX.Element {
  const dispatch = useAppDispatch();
  const expendLayerPanel = useAppSelector(
    (state) => state.layout.expendLayerPanel,
  );

  const togglePanle = () => {
    dispatch(toggleLayerPanelExpend(!expendLayerPanel));
  };

  return (
    <div className='visual-editor-header-layout'>
      <div className='layer-btn' onClick={togglePanle}></div>
    </div>
  );
}

export default EditorHeader;
