import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flex md:justify-around pt-10 md:py-10 flex-col md:flex-row items-center justify-center relative">
      <div className="text-center">
        <p className="text-xs pt-5">@2023 LogoIpsum. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;