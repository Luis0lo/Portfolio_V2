
import styles from './socialMediaShare.module.css';
import { FaShareAlt, FaLinkedin, FaWhatsappSquare, FaTwitterSquare  } from 'react-icons/fa';
import {WhatsappShareButton, LinkedinShareButton,TwitterShareButton} from 'react-share'


const SocialMediaShare = () => {
const title = 'Luis is a Software Developer and has an interesting profile! It may fit your needs'
const url = 'www.linkedin.com/in/withluis'

  return (
    <div className={styles.stickyShare}>
        <p className={styles.shareIcon}><FaShareAlt/></p>

        <span>
        <LinkedinShareButton
        title={title}
        summary='Luis is a Software Developer looking for an opportunity to step in the tech world'
        url={url}>
            <FaLinkedin className={styles.icons} title="Linkedin" />
        </LinkedinShareButton>
        </span>

        <span>
        <TwitterShareButton 
        title={title}
        url={url}>
            <FaTwitterSquare className={styles.icons} title="Twitter" />
        </TwitterShareButton>
        </span>

        <span>
        <WhatsappShareButton
        title={title}
        url={url}>
            <FaWhatsappSquare className={styles.icons} title="Whatsapp"  />
        </WhatsappShareButton>
        </span>

    </div>
  );
};

export default SocialMediaShare;