import fcss from '../styles/Footer.module.css'

function MainFooter() {

    return (
        <div className={fcss.MainFooterParent}>
            <footer className={fcss.MainFooterChild}>
                <a>2021 By Tallis Riley</a>
            </footer>
        </div>

    )
}

export default MainFooter;