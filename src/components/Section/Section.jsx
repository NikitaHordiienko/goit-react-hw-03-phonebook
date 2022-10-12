import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
    return (
        <section className={css.section}>
            <h2 className={css["page-title"]}>{title}</h2>
            {children}
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Section;