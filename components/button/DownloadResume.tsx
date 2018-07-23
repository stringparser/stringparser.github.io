import Button from './Button';
import resume from '@stringparser/cv';

const DownloadResume: React.SFC = ({ children }) => (
  <a href={resume.pdf}>
    <Button>
      {children || 'Download pdf version'}
    </Button>
  </a>
);

export default DownloadResume;
