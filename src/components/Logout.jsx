const Logout = () => {
    sessionStorage.clear();
    window.location.href = '/login';
  };
  
export default Logout  