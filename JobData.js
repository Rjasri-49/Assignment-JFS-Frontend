document.getElementById('jobform').addEventListener('submit',function(event){
    document.querySelectorAll('.error').forEach(e => e.textContent ='');
        let valid=true;
        const title=document.getElementById('title').Value;
        const type=document.getElementById('type').Value;
        const department=document.getElementById('department').Value;
        const country=document.getElementById('country').value;
        const description=document.getElementById('description').value;
        const opening_date=document.getElementById('opening_date').value;
        const current_date=new Date().toISOString().split('T')[0];
            if(!title){
                document.getElementById('titleError').textContent='Title is required';
                valid=false;
            }
            if(!type){
                document.getElementById('typeError').textContent='Please select a job type';
                valid=false;
            }
            if(!department){
                document.getElementById('departmentError').textContent='Please select a department';
                valid=false;
            }
            if(!country){
                document.getElementById('countryError').textContent='Please select a country';
                valid=false;
            }
            if(!description){
                document.getElementById('descriptionError').textContent='Description is required';
                valid=false;
            }
            if(!openingDate){
                document.getElementById('dateError').textContent='Openig Date is required';
                valid=false;
            }else if(openingDate>CurrentDate){
                document.getElementById('dateError').textContent='Date cannot be in the future';
                valid=false;
            }
            if(!valid){
                event.preventDefault();
            }
    })
    document.getElementById('opening_date').valueAsDate=new Date();