import { browser , element , by} from 'protractor';



describe('angularjs homepage todo list', async function() {
  it('should add a todo', async function() {
    await browser.get('https://angularjs.org');

    await element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    await element(by.css('[value="add"]')).click();

    var todoList = await element.all(by.repeater('todo in todoList.todos'));
    // expect(await todoList.size()).toEqual("3");
    // expect(todoList.ge(2).getText()).toEqual('write first protractor test');

    // // You wrote your first test, cross it off the list
    // todoList.get(2).element(by.css('input')).click();
    // var completedAmount = element.all(by.css('.done-true'));
    // expect(completedAmount.count()).toEqual(2);
  });
});