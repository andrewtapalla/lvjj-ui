    import './Footer.css'

export default function Footer() {
    return(
        <div className="pageFooter" style={{ textAlign: 'center'}}>
            <hr />
            <a href="https://www.facebook.com/profile.php?id=100008343464872" target="_blank"><img src={process.env.PUBLIC_URL + './images/facebook2.png'} height="25" width="25" className="socialMedia" /></a>
            <div className="divider" />
            <a href="https://www.instagram.com/cresencio_a_lenda/" target="_blank"><img src={process.env.PUBLIC_URL + './images/instagram3.png'} height="25" width="25" className="socialMedia" /></a>
            <br /><br />
            © Las Vegas Jiu-Jitsu, 2022
        </div>
    )
}
