// IPO- Input Process Output

// Constants and Variables(State)
let skills;
// Cached Element Refrences
const $button = $('button');
const $ul = $('ul');
const $li = $('li');
const $span = $('span');
const $input = $('input');
// Event Listeners
$button.on('click', handleAddSkill);
$ul.on('click', 'span', handleDelete);
// $li.on('click', handleDelete);


// Functions

init();

function init() {
    skills = [];
    render();
}

function handleAddSkill(){
    // store the value from the input tag inside a local variable
    const skill = $input.val();
    // check to make sure we have skill data
    if(skill) {
        // create the UI for the skill 
        const $skill = $(`<li><span id="test">X</span>${skill}</li>`)
        // push the skill UI into the skills list
        skills.push($skill);
        // clear the input tag's value
        $input.val('');
        // render()
        render()
    } else return;

}
// $(this).find('li').fadeOut(2000)

function handleDelete(){
    $(this).closest('li').fadeOut(1000,function(){

    })
}

function render() {
    // take the list of skills in the skills array and them to the UL tag
    if(!skills.length) $ul.css('margin-bottom', '30px');
    else $ul.css('margin-bottom', '0px');

    $ul.html(skills);
}