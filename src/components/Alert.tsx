import React from 'react';
import {
  AiFillCheckCircle as SuccessIcon,
  AiFillWarning as WarningIcon,
  AiFillCloseCircle as ErrorIcon,
} from 'react-icons/ai';
import { GrClose as CloseIcon } from 'react-icons/gr';
import { StyledAlert } from '../styles/alert.styles';

type AlertProps = {
  heading: string;
  message: string;
  withIcon?: boolean;
  type: 'success' | 'error' | 'warning';
  onClose?: () => void;
};

function renderIcon(type: 'success' | 'error' | 'warning') {
  switch (type) {
    case 'success':
      return <SuccessIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'error':
      return <ErrorIcon />;
    default:
      return null;
  }
}

const Alert: React.FC<AlertProps> = ({
  heading,
  message,
  withIcon = true,
  type = 'success',
  onClose = null,
}) => {
  return (
    <StyledAlert type={type}>
      {withIcon && <div className="icon">{renderIcon(type)}</div>}
      <div>
        <div className="heading">{heading}</div>
        <div className="text">{message}</div>
      </div>
      {typeof onClose === 'function' && (
        <button type="button" className="close-btn" onClick={() => onClose()}>
          <CloseIcon />
        </button>
      )}
    </StyledAlert>
  );
};

export default Alert;
