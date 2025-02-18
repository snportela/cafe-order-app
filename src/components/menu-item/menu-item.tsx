import "./styles.sass"

const MenuItem = () => {
  return (
    <div className="menu-item">
      <div className="top-section"></div>
      <div className="bottom-section">
        <p className="item-name">Espresso</p>
        <div className="add-section">
          <p className="price">$12,00</p>
          <button className="add-btn">+</button>
        </div>
      </div>
    </div>
  )
}

export default MenuItem