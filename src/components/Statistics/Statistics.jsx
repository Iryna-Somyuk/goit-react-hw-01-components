import PropTypes from 'prop-types';
import {
  ConteinerStatistics,
  Title,
  ListStatistics,
  ItemList,
  ItemLabel,
  ItemPercentage,
} from './Statistics.styled';
import { getRandomHexColor } from '../../utils/getrandomcolor';

export const Statistics = ({ title, stats }) => {
  return (
    <ConteinerStatistics>
      <Title>{title && <h2>{title}</h2>}</Title>
      <ListStatistics>
        {stats.map(({ id, label, percentage }) => (
          <ItemList
            key={id}
            style={{ backgroundColor: `${getRandomHexColor()}` }}
          >
            <ItemLabel>{label}</ItemLabel>
            <ItemPercentage>{percentage}%</ItemPercentage>
          </ItemList>
        ))}
      </ListStatistics>
    </ConteinerStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
