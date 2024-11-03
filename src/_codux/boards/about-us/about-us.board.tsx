import { createBoard } from '@wixc3/react-board';
import { AboutUs } from '../../../components/about-us/about-us';

export default createBoard({
    name: 'AboutUs',
    Board: () => <AboutUs />,
    isSnippet: true,
});
