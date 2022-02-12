export const getService = async (url) => {
  var response = await fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc5OWUyYTExODIyZjg5NDIyMzNhNTgyNDEwOWJjMyIsInN1YiI6IjYxOGRjNzZjOWE4YThhMDA0MzUxZTA0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ARZF3j4q3eB3S5qbYTqT8nGgJ4udbDNx4BUGnTk22s4",
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  var dataResponse = await response.json();
  return dataResponse;
};
