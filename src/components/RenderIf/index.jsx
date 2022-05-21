import PropTypes from 'prop-types';

export default function RenderIf({ children, condition }) {
    return condition ? children : null;
}

RenderIf.propTypes = {
    children: PropTypes.node.isRequired,
    condition: PropTypes.bool.isRequired,
};
