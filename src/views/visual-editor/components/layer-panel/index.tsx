import React from 'react';
import './index.scss';
import { useAppSelector } from '@/store';
import classnames from 'classnames';

function LayerPanel() {
  const expendLayerPanel = useAppSelector(
    (state) => state.layout.expendLayerPanel,
  );
  return (
    <div
      className={classnames(
        'layer-panel-layout',
        expendLayerPanel ? 'panel-expend' : '',
      )}
    ></div>
  );
}

export default LayerPanel;
