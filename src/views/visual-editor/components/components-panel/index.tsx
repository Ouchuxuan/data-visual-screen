import React from 'react';
import classnames from 'classnames';
import { useAppDispatch, useAppSelector } from '@/store';
import './index.scss';
import { toggleComPanelExpend } from '@store/layout';

function ComponentsPanel() {
  const expendComPanel = useAppSelector((state) => state.layout.expendComPanel);
  const dispatch = useAppDispatch();

  const togglePanle = () => {
    dispatch(toggleComPanelExpend(!expendComPanel));
  };

  return (
    <div
      className={classnames(
        'components-panel-layout',
        expendComPanel ? 'panel-expend' : '',
      )}
    >
      <div className='test-button' onClick={togglePanle}></div>
    </div>
  );
}
export default ComponentsPanel;
