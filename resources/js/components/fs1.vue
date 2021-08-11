<template>
    <section>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">FS1</h1>
                    </div>
                    <!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active">FS1</li>
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
                                <!-- <div class="row"> -->
                                    <h3 class="card-title">Fires Occurence Book</h3>
                                <!-- </div> -->
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
                                                <template v-slot:cell(actions)="row">
                                                    <b-button class="btn btn-sm" variant="primary" @click="openModal(row.item)"> Add FS1</b-button>
                                                </template>
                                            </b-table>
                                        </div>
                                    </div>
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
                            <h4 class="modal-title">Add FS1</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form @submit.prevent="addFire">
                            <div class="modal-body">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Location </label>
                                        <input required type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Location" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">DiscoveredBy</label>
                                        <input required v-model.trim="form.discoveredBy" type="text" class="form-control" id="exampleInputPassword1" placeholder="DiscoverdBy" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Method Of Calling</label>
                                        <input required v-model="form.methodOfCalling" type="text" class="form-control" id="exampleInputPassword1" placeholder="Method of Calling" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Time Of Discovery</label>
                                        <input required v-model.trim="form.time" type="time" class="form-control" id="exampleInputPassword1" placeholder="Password" />
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
            fields: ['#', 'location', 'discoveredBy', 'methodOfCalling','time','actions'],
            filter: null,
            filterOn: [],
            form: new Form({
                id: '',
                discoveredBy: '',
                methodOfCalling: '',
                time: '',
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
                // console.log(data);
                this.fires = data.data.all_units;
            }).catch((error) => {
                console.log(error);
            });
        },
        addFire(){
            console.log('weqwe')
        }
    },
    created() {
        // this.getFires();
    }
}
</script>

