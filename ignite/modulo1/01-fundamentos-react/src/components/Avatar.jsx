import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src }) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder} src={src} alt="" />
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool
};
