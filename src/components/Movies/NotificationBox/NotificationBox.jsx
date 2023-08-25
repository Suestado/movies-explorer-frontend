function NotificationBox({ error }) {
  return <p className="notificationBox">
    {error ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' :
      'Ничего не найдено'}
  </p>;
}

export default NotificationBox;
