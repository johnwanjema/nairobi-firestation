<template>
    <section>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Fires</h1>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active">Fires</li>
                        </ol>
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
    
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <div class="row">
                                    <div class="col-md-11">
                                        <h3 class="card-title">Fires Occurence Book</h3>
                                    </div>
                                    <div class="col-md-1">
                                        <button @click="openModal" type="button" class="btn btn-success min-width-125">Add Fire</button>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                    <!-- <div class="row">
                                        <div class="col-sm-12 col-md-6">
                                            <div id="example1_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example1"></label></div>
                                        </div>
                                    </div> -->
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <b-table responsive striped hover show-empty :items="fires" :fields="fields" :per-page="0" :current-page="currentPage" :filter="filter" :filterIncludedFields="filterOn" @filtered="onFiltered">
                                                <template v-slot:cell(#)="row">
                                                                    <p>{{row.index + 1}}</p>
                                                </template>

                                                <template v-slot:cell(amount)="row">
                                                    <p> $ {{row.item.amount}}</p>
                                                </template>
                                                <!-- <template v-slot:cell(actions)="row">
                                                    <b-button class="btn btn-sm" variant="danger" @click="deleteExpense(row.item.id)"> Delete</b-button>
                                                </template> -->
                                            </b-table>
                                        </div>
                                    </div>
                                    <!-- <div class="row">
                                        <div class="col-sm-12 col-md-7">
                                            <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                                        </div>
                                        <div class="col-sm-12 col-md-5">
                                            <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                                <ul class="pagination">
                                                    <li class="paginate_button page-item previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li>
                                                    <li class="paginate_button page-item active"><a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0" class="page-link">2</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="3" tabindex="0" class="page-link">3</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="4" tabindex="0" class="page-link">4</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="5" tabindex="0" class="page-link">5</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="6" tabindex="0" class="page-link">6</a></li>
                                                    <li class="paginate_button page-item next" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx="7" tabindex="0" class="page-link">Next</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->

             <div class="modal fade" id="modal-default">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Add Fire</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form @submit.prevent="addFire">
                            <div class="modal-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Location </label>
                                        <input v-model.trim="form.location" required type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Location" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">DiscoveredBy</label>
                                        <input required v-model.trim="form.discoveredBy" type="text" class="form-control" id="exampleInputPassword1" placeholder="DiscoverdBy" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Phone Number</label>
                                        <input required v-model.trim="form.phoneNumber" type="text" class="form-control" id="exampleInputPassword1" placeholder="DiscoverdBy" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Method Of Calling</label>
                                        <input required v-model="form.methodOfCalling" type="text" class="form-control" id="exampleInputPassword1" placeholder="Method of Calling" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Time Of Discovery</label>
                                        <input required v-model.trim="form.timeOfDiscovery" type="time" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                            </div>
                            <div class="modal-footer justify-content-between">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Add Fire</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          <!-- /.modal-content -->
        <!-- /.modal-dialog -->
        </section>
        <!-- /.content -->
    </section>
</template>


<script>
export default {
    data() {
        return {
            currentPage: 1,
            perPage: 5,
            fields: ['#', 'location', 'discoveredBy', 'methodOfCalling','timeOfDiscovery'],
            filter: null,
            filterOn: [],
            form: new Form({
                id: '',
                discoveredBy: '',
                phoneNumber:'',
                location:'',
                methodOfCalling: '',
                timeOfDiscovery: '',
            }),
            editMode: false,
            totalRows: 1,
            fires: [{}]
        }
    },
    methods: {
        openEditModal(expense) {
            this.form.reset();
            $('#modal-default').modal('show');
            this.editMode = true;
            this.form.fill(expense)
        },
        openModal() {
            this.form.reset();
            $('#modal-default').modal('show');
            this.editMode = false;
        },
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1
        },
        getFires() {
            axios.get('/api/fires').then(({ data }) => {
                console.log(data);
                this.fires = data.data;
            }).catch((error) => {
                console.log(error);
            });
        },
        addFire(){
              this.form.post('/api/fires').then(({ data }) => {
                // console.log(data)
                this.expenses = data.data;
                $('#modal-default').modal('hide');
                this.getFires();
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    created() {
        this.getFires();
    }
}
</script>

