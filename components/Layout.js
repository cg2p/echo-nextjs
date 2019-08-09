import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.content}
    <main>
      <div className='container'>{props.children}</div>
    </main>
  </div>
);

export default Layout;
