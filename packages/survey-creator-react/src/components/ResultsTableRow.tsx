import { Base } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";

interface ICreatorSurveyResultsTableRowComponentProps {}
export class CreatorSurveyResultsTableRowComponent extends SurveyElementBase<
  ICreatorSurveyResultsTableRowComponentProps,
  any
> {
  constructor(props: ICreatorSurveyResultsTableRowComponentProps) {
    super(props);
  }

  protected getStateElement(): Base {
    return null;
  }

  render(): JSX.Element {}
}

/*

<tr data-bind="click: toggle">
    <td class="svd-dark-border-color">
        <!-- ko if: isNode -->
        <span class="survey-result-marker" data-bind="css: { 'survey-result-marker--expanded': !collapsed }">▶</span>
        <!-- /ko -->
        <span data-bind="text: title"></span></td>
    <td class="svd-dark-border-color" data-bind="text: name"></td>
    <td class="svd-dark-border-color">
        <div class="survey-result-value" data-bind="text: getString(value)"></div>
    </td>
    <td class="svd-dark-border-color" data-bind="text: getString(displayValue)"></td>
</tr>
<!-- ko if: isNode && !collapsed -->
<!-- ko foreach: data -->
<!-- ko component: { name: 'survey-results-table-row', params: { model: $data } } -->
<!-- /ko -->
<!-- /ko -->
<!-- /ko -->

*/
