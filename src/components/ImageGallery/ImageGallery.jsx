import PropTypes from 'prop-types';
import { GalleryContainer } from './ImageGallery.styled';
import ImageGlleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ items }) {
  return (
    <GalleryContainer>
      {items.map(item => (
        <ImageGlleryItem key={item.id} item={item} />
      ))}
    </GalleryContainer>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ 
      id: PropTypes.number.isRequired, 
    })
  ),
};