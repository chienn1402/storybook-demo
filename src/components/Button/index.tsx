import './Button.styles.css';

interface Props {
  label: string;
  size: 'sm' | 'md' | 'lg';
  color: 'primary' | 'success' | 'danger';
  disabled?: boolean;
  onButtonClick?: () => void;
}

const Button: React.FC<Props> = ({
  label,
  size,
  color,
  disabled,
  onButtonClick,
}) => {
  return (
    <button
      className={`btn btn--${size} btn--${color}`}
      disabled={disabled}
      onClick={onButtonClick}
    >
      {label}
    </button>
  );
};

export default Button;
