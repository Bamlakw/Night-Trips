import { createBoard } from '@wixc3/react-board';
import { Testimonial } from '../../../components/testimonial/testimonial';

export default createBoard({
    name: 'Testimonial',
    Board: () => <Testimonial />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
