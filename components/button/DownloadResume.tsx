import Button from './Button';
import resume from '@stringparser/cv/src/config';

const DownloadResume: React.FC = ({ children }) => (
  <a href={resume.pdf}>
    <Button>
      {children || 'Download PDF version'}
    </Button>
  </a>
);

export default DownloadResume;
