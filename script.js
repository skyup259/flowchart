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
      }
    };

    var $lastEvent = $('#last_event_example_6');
    var $lastEventContainer = $('#last_event_example_container_6');
    
    var $flowchart = $('#example_1');
    
    function showEvent(txt) {
      $lastEvent.text(txt + "\n" + $lastEvent.text());
      $lastEventContainer.effect( "highlight", {color: '#3366ff'}, 500);
    }
    
    // Apply the plugin on a standard, empty div...
    $flowchart.flowchart({
      data: data,
      onOperatorSelect: function(operatorId) {
        showEvent('Operator "' + operatorId + '" selected. Title: ' + $flowchart.flowchart('getOperatorTitle', operatorId) + '.');
        return true;
      },
      onOperatorUnselect: function() {
        showEvent('Operator unselected.');
        return true;
      },
      onLinkSelect: function(linkId) {
        showEvent('Link "' + linkId + '" selected. Main color: ' + $flowchart.flowchart('getLinkMainColor', linkId) + '.');
        return true;
      },
      onLinkUnselect: function() {
        showEvent('Link unselected.');
        return true;
      },
      onOperatorCreate: function(operatorId, operatorData, fullElement) {
        showEvent('New operator created. Operator ID: "' + operatorId + '", operator title: "' + operatorData.properties.title + '".');
        return true;
      },
      onLinkCreate: function(linkId, linkData) {
        showEvent('New link created. Link ID: "' + linkId + '", link color: "' + linkData.color + '".');
        return true;
      },
      onOperatorDelete: function(operatorId) {
        showEvent('Operator deleted. Operator ID: "' + operatorId + '", operator title: "' + $flowchart.flowchart('getOperatorTitle', operatorId) + '".');
        return true;
      },
      onLinkDelete: function(linkId, forced) {
        showEvent('Link deleted. Link ID: "' + linkId + '", link color: "' + $flowchart.flowchart('getLinkMainColor', linkId) + '".');
        return true;
      },
      onOperatorMoved: function(operatorId, position) {
        showEvent('Operator moved. Operator ID: "' + operatorId + ', position: ' + JSON.stringify(position) + '.');
      }
    });
    
    
    
    
    var operatorI = 0;
    $flowchart.siblings('.create_operator').click(function() {
        console.log("in");
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
    
    $flowchart.siblings('.delete_selected_button').click(function() {
      $flowchart.flowchart('deleteSelected');
    });
  });