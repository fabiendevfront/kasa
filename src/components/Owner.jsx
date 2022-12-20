/**
 * Component for Owner
 * @param {Object} props.host - The host object for the owner.
 * @returns A React component.
 */
const Owner = ({ host }) => {
    return (
        <div className="owner">
            <h3 className="owner__name">{host.name}</h3>
            <div className="owner__picture">
                <img src={host.picture} alt="Propriétaire de la location" />
            </div>
        </div>
    );
};

export default Owner;