const LoginField = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Форма отправлена, логин введен!");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login">Ваш логін</label>
            <input id="login" name="user-login" required /> 
            <button type="submit">Увійти</button>
        </form>
    )
}
export default LoginField;