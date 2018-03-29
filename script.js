$(document).ready(function() {
  var data = {
    operators: {
      operator1: {
        top: 20,
        left: 20,
        properties: {
          title: 'Operator 1',
          inputs: {},
          outputs: {
            output_1: {
              label: 'Output 1',
            },
            output_2: {
              label: 'output 2',
            }
          }
        }
      },
      operator2: {
        top: 80,
        left: 300,
        properties: {
          title: 'Operator 2',
          inputs: {
            input_1: {
              label: 'Input 1',
            },
            input_2: {
              label: 'Input 2',
            },
          },
          outputs: {
            output_1: {
              label: 'Output 1',
            }
          }
        }
      },
      operator3: {
        top: 80,
        left: 600,
        properties: {
          title: 'Operator 3',
          inputs: {
            input_1: {
              label: 'Input 1',
            },
            input_2: {
              label: 'Input 2',
            },
          },
          outputs: {}
        }
      },
    },
   
    links: {
      link_1: {
        fromOperator: 'operator1',
        fromConnector: 'output_1',
        toOperator: 'operator2',
        toConnector: 'input_2',
      },
      link_2: {
        fromOperator: 'operator1',
        fromConnector: 'output_1',
        toOperator: 'operator3',
        toConnector: 'input_1',
      },
      link_3: {
        fromOperator: 'operator2',
        fromConnector: 'output_1',
        toOperator: 'operator3',
        toConnector: 'input_2',
      }
    }
  };

  // Apply the plugin on a standard, empty div...
  var $flowchart = $('#example_1');
  //console.log($flowchart);
  $flowchart.flowchart({
    data: data
  });
  
  var operatorI = 1;
  $(".create_operator").click(function() {
    var operatorId = 'created_operator_' + operatorI;
    var operatorData = {
      top: 60,
      left: 500,
      properties: {
        title: 'Operator ' + (operatorI + 3),
        inputs: {
          input_1: {
            label: 'Input 1',
          }
        },
        outputs: {
          output_1: {
            label: 'Output 1',
          }
        }
      }
    };
    
    operatorI++;
    
    $flowchart.flowchart('createOperator', operatorId, operatorData);
  });
  
  $(".delete_selected_button").click(function() {
    //console.log("delete link");
    $flowchart.flowchart('deleteSelected');
  });

  $(".get_data").click(function() {
    var data = $flowchart.flowchart('getData');
    $('#data').val(JSON.stringify(data, null, 2));
   // console.log(data);
  });

  $(".set_data").click(function() {
    var data = JSON.parse($('#data').val());
    $flowchart.flowchart('setData', data);
  });

});