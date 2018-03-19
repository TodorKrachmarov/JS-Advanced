class PaymentManager{
    constructor(title){
        this.title = title;
        this.element = this.CreateElement(title);
    }

    CreateElement(title){
        let table = $('<table>');
        let caption = $(`<caption>${title} Payment Manager</caption>`);
        table.append(caption);

        let thead = $('<thead>');
        let trThead = $('<tr>');
        let thThead1 = $('<th class="name">Name</th>');
        let thThead2 = $('<th class="category">Category</th>>');
        let thThead3 = $('<th class="price">Price</th>');
        let thThead4 = $('<th>Actions</th>');
        trThead.append(thThead1);
        trThead.append(thThead2);
        trThead.append(thThead3);
        trThead.append(thThead4);
        thead.append(trThead);
        table.append(thead);

        let tbody = $('<tbody class="payments">');
        table.append(tbody);

        let tfoot = $('<tfoot class="input-data">');
        let trFoot = $('<tr>');
        let tdFoot1 = $('<td><input name="name" type="text"></td>');
        let tdFoot2 = $('<td><input name="category" type="text"></td>');
        let tdFoot3 = $('<td><input name="price" type="number"></td>');
        trFoot.append(tdFoot1);
        trFoot.append(tdFoot2);
        trFoot.append(tdFoot3);
        let tdFoot4 = $('<td>');

        let addButton = $('<button>Add</button>').click(() => {
           let inputs = $(this.element).find('#input-data');
            let name = $(this.element).find('input')[0];
            let category = $(this.element).find('input')[1];
            let price = $(this.element).find('input')[2];
            if(name.value.trim() !== '' && category.value.trim() !== '' && price.value !== ''){
                let priceNum = Number(price.value).toFixed(2);
                let trTbody = $('<tr>');
                let tdTbody1 = $(`<td>${name.value}</td>`);
                let tdTbody2 = $(`<td>${category.value}</td>`);
                let tdTbody3 = $(`<td>${Number(price.value).toFixed(2)}</td>`);
                let tdTbody4 = $('<td>');
                let deleteButton = $('<button>Delete</button>').click(function () {
                    let row = $(this).parent().parent();
                    row.remove();
                });
                tdTbody4.append(deleteButton);

                trTbody.append(tdTbody1);
                trTbody.append(tdTbody2);
                trTbody.append(tdTbody3);
                trTbody.append(tdTbody4);
                $(this.element).find('tbody').append(trTbody);
            }
            name.value = '';
            $(category).val('');
            $(price).val('');
        });
        tdFoot4.append(addButton);

        trFoot.append(tdFoot4);

        tfoot.append(trFoot);
        table.append(tfoot);

        return table;
    }

    render(target){
        target = '#' + target;
        $(target).append(this.element);
    }
}