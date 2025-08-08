import { Image } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumpsUp from "../assets/thumbs-up.webp";

interface Props {
  rating_top: number;
}

const Emoji = ({ rating_top }: Props) => {
  if (rating_top < 3) return null;
  const emojiMap = [
    {rating: 5, src: bullsEye, alt: '' },
    {rating: 4, src: thumpsUp, alt: '' },
    {rating: 3, src: meh, alt: '' },
]
  const image = emojiMap.find(k => k.rating == rating_top);
  return <Image src={image?.src} alt={image?.alt} boxSize={8} margin={1}></Image>;
};

export default Emoji;
