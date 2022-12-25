import Versions from '../../components/Versions'
import Card from '../../components/Card'

function Home(): JSX.Element {
  return (
    <div className="home">
      <Versions></Versions>
      <div className="home-card">
        <Card
          {...{
            image: 'http://abcstatic.com/images/png/icon-tag002.png',
            title: '手机网站支付',
            subTitle: '用户在商家手机网站进行付款',
            url: '/tools'
          }}
        ></Card>
        <Card
          {...{
            image: 'http://abcstatic.com/images/png/xiaodu-gray.png',
            title: '知否科技',
            subTitle: '知否知否绿肥红瘦',
            url: 'http://zhifou.co'
          }}
        ></Card>
      </div>
    </div>
  )
}

export default Home
