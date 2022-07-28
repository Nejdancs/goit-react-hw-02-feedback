import PropTypes from 'prop-types';
import { BtnItem, BtnList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onClick }) => {
  return (
    <BtnList>
      <BtnItem>
        <Button onClick={() => onClick('good')} type="button">
          Good
        </Button>
      </BtnItem>

      <BtnItem>
        <Button onClick={() => onClick('neutral')} type="button">
          Neutral
        </Button>
      </BtnItem>

      <BtnItem>
        <Button onClick={() => onClick('bad')} type="button">
          Bad
        </Button>
      </BtnItem>
    </BtnList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
};
