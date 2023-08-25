import { IRenderInputProps } from './types';
import { Wrapper } from './style';

const RenderInput: React.FC<IRenderInputProps> = ({
  labelName,
  type = 'text',
  name,
  containerClass,
  inputClass,
  errorClass
}) => (
  <Wrapper className={containerClass}>
    <label>{labelName}</label>
    <input type={type} className={inputClass} name={name} />
    <span className={errorClass}>*error</span>
  </Wrapper>
);

export default RenderInput;
