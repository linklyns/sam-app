// Author: Lincoln Lyons
// SAM Workshop: Hello World function, deployed by a GitHub Actions pipeline

export const lambdaHandler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world',
    }),
  };

  return response;
};
