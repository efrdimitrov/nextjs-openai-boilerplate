const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
      content = "Generating SQL query...";
  } else if (error) {
      content = `Error: ${error.message}`;
  } else if (data) {
      console.log("Generated SQL Query: ", data.result);
      content = (
          <>
              <h3>Generated SQL Query:</h3>
              <pre className="sql-query">{data.result.sqlQuery}</pre>
          </>
      );
  } else {
      content = "";
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
