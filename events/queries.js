const { gql } = require("apollo-server-express");

exports.updateBuildStatus = gql`
  mutation updateBuildStatus($id: Int, $status: builds_statuses_enum, $output: String) {
    update_builds(where: {id: {_eq: $id}}, _set: {status: $status, output: $output}) {
      affected_rows
    }
  }
`;

exports.insertBuild = gql`
  mutation createBuild($dependencies: jsonb) {
    insert_builds(objects: {dependencies: $dependencies}) {
      affected_rows
    }
  }
`