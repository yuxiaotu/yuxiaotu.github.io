const MyTable = {
  props: {
    data: {
      type: Array
    },
    rows: {
      type: Number,
      default: 10
    },
    columns: {
      type: Number,
      default: 5
    }
  },

  setup(props, context) {
    let data = ref(props.data);
    let rows = ref(props.rows);
    let columns = ref(props.columns);
    let dataInit = reactive([]);

    let dataRows = data.value.length;
    let dataColumns = data.value[0].length;

    console.log('data rows', dataRows);
    console.log('data columns', dataColumns);

    for (let i = 0; i < rows.value; i++) {
      let res = [];
      for (let j = 0; j < columns.value; j++) {
        if (i >= dataRows || j >= dataColumns) {
          //console.log('无值');
          res.push(' ');
        } else {
          //console.log(data.value[i][j]);
          res.push(data.value[i][j]);
        }
      }
      dataInit.push(res);
    }

    return {
      data,
      dataInit,
    }
  },

  template: `
    <div>
      <table class="table-space" border="1" cellspacing="0">
        <tr v-for="row in dataInit">
          <td v-for="column in row" contenteditable="true">
            {{ column }}
          </td>
        </tr>
      </table>
    </div>
  `
}