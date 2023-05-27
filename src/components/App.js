import style from "../styles/app.module.css";
function App() {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.left_top}>
            <div className={style.nav}>
              <span className={style.heading}>Ipod</span>
              <span>
                <img
                  className={style.img}
                  alt="img"
                  src="https://cdn-icons-png.flaticon.com/128/7620/7620234.png"
                />
              </span>
            </div>

            <ul className={style.item}>
              <li>
                <span>
                  <img
                    className={style.list_img}
                    alt="music"
                    scr="https://cdn-icons-png.flaticon.com/128/2995/2995101.png"
                  />
                </span>
                <span>Music</span>
              </li>
              <li>
                <span>
                <img className={style.list_img} alt='img' src='https://cdn-icons-png.flaticon.com/128/2659/2659360.png'/>
            
                </span>
                <span>Photo</span>
              </li>
              <li>
                <span>**</span>
                <span>Games</span>
              </li>
              <li>
                <span>**</span>
                <span>Music</span>
              </li>
            </ul>
          </div>
          <div className={style.right_top}></div>
        </div>

        <div className={style.buttom}>
          <div className={style.outer_div}>
            <div className={style.inner_div}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
